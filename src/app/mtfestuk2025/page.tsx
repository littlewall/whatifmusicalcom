"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MTFestUK2025() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/mtfestuk2025/synopsis');
  }, [router]);

  return null;
}
