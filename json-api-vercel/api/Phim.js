import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./', 'db.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  res.status(2000).json(data.Phim); // hoặc `data` nếu bạn không có key `vexemphim`
}
