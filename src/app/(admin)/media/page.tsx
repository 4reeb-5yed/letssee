"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function MediaLibraryPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploads, setUploads] = useState<{ name: string; progress: number }[]>([]);

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    
    for (const file of files) {
      if (!file.type.startsWith("image/")) continue;
      
      const uploadItem = { name: file.name, progress: 0 };
      setUploads(prev => [...prev, uploadItem]);
      
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setUploads(prev => 
          prev.map(u => u.name === file.name ? { ...u, progress: i } : u)
        );
      }
    }
  };

  return (
    <div>
      <h1 className="font-display text-[--text-2xl] mb-[--space-6]">Media Library</h1>
      
      {/* Upload zone */}
      <div
        className={`border-2 border-dashed rounded-md p-[--space-8] text-center transition-colors ${
          isDragging 
            ? "border-[--color-accent] bg-[--color-accent-soft]/10" 
            : "border-[--color-line] hover:border-[--color-ink-soft]"
        }`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <p className="text-[--color-ink-soft] mb-[--space-3]">
          Drag and drop images here, or
        </p>
        <Button variant="secondary" size="sm">
          Browse Files
        </Button>
        <p className="text-xs text-[--color-ink-soft] mt-[--space-3]">
          PNG, JPG, WebP up to 10MB. Images will be optimized automatically.
        </p>
      </div>

      {/* Upload progress */}
      {uploads.length > 0 && (
        <div className="mt-[--space-5] space-y-2">
          {uploads.map((upload, index) => (
            <div key={index} className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-3]">
              <div className="flex justify-between items-center mb-[--space-2]">
                <span className="text-sm font-mono truncate">{upload.name}</span>
                <span className="text-xs text-[--color-ink-soft]">{upload.progress}%</span>
              </div>
              <div className="h-1 bg-[--color-line] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[--color-accent] transition-all duration-200"
                  style={{ width: `${upload.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      <div className="mt-[--space-8] text-center text-[--color-ink-soft]">
        <p>No images uploaded yet.</p>
        <p className="text-sm mt-[--space-2]">
          Upload images when creating or editing projects.
        </p>
      </div>
    </div>
  );
}
