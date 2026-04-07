'use client';

import NotePreview from '@/components/NotePreview/NotePreview';

interface NotePreviewClientProps {
  noteId: string;
}

export default function NotePreviewClient({ noteId }: NotePreviewClientProps) {
  return <NotePreview noteId={noteId} />;
}
