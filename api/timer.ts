
import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Подключаемся к Supabase на сервере
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Запрещаем кеширование ответов
  res.setHeader('Cache-Control', 'no-store');

  // GET: получаем время начала таймера
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('global_timer')
      .select('started_at')
      .eq('id', 1)
      .single();

    if (error) {
      return res.status(500).json({
        error: 'Failed to fetch timer'
      });
    }

    return res.status(200).json({
      startedAt: data.started_at
    });
  }

  // POST: сбрасываем таймер
  if (req.method === 'POST') {
    const { code } = req.body ?? {};

    if (
      typeof code !== 'string' ||
      code !== process.env.TIMER_RESET_CODE
    ) {
      return res.status(403).json({
        error: 'Invalid reset code'
      });
    }

    const { data, error } = await supabase
      .from('global_timer')
      .update({
        started_at: new Date().toISOString()
      })
      .eq('id', 1)
      .select('started_at')
      .single();

    if (error) {
      return res.status(500).json({
        error: 'Failed to reset timer'
      });
    }

    return res.status(200).json({
      startedAt: data.started_at
    });
  }

  return res.status(405).json({
    error: 'Method not allowed'
  });
}
