"use client";
import DOMPurify from 'dompurify';
import { useMemo } from 'react';

export const HtmlContent = ({ html, className }) => {
  const cleanHtml = useMemo(() => {
    if (!html) return '';
    
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return DOMPurify.sanitize(doc.body.innerHTML, {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["scrolling", "no"],
    });
  }, [html]);

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};