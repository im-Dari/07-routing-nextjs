'use client';

/* import { fetchNotes } from '@/lib/api'; */
import NotesClientImpl from '../../Notes.client';

interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  return <NotesClientImpl tag={tag} />;
}
