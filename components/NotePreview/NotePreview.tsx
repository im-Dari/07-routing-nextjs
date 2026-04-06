'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '../../lib/api';

interface Props {
  noteId: string;
}

export default function NotePreview({ noteId }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Something went wrong</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.tag}</p>
      <p>{data.content}</p>
      <p>{data.createdAt}</p>
    </div>
  );
}