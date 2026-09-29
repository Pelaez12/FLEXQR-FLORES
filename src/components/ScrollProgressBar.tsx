import React from 'react';
import { ScrollProgressProvider, ScrollProgress } from '@/components/animate-ui/primitives/animate/scroll-progress';

export const ScrollProgressBar: React.FC = () => {
  return (
    <div className="reading-progress-wrap">
      <ScrollProgressProvider global={true} direction="horizontal" scrollAxis="y">
        <ScrollProgress data-testid="reading-progress" aria-hidden="true" className="boutique-reading-progress" />
      </ScrollProgressProvider>
    </div>
  );
};
