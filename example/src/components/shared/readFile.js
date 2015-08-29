import fs from 'fs';
import path from 'path';

export default function readFile(...parts) {
  return fs.readFileSync(path.join(...parts), 'utf8');
}
