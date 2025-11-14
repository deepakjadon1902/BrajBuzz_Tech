import { HeroSection } from '../components/HeroSection';
import { TrendingReviews } from '../components/TrendingReviews';
import { LatestReviewsCarousel } from '../components/LatestReviewsCarousel';
import { CategoriesGrid } from '../components/CategoriesGrid';
import { LatestNews } from '../components/LatestNews';
import { VideoSection } from '../components/VideoSection';
import { EditorsPicks } from '../components/EditorsPicks';

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <HeroSection />
        </div>
        <TrendingReviews />
        <LatestReviewsCarousel />
        <CategoriesGrid />
        <LatestNews />
        <VideoSection />
        <EditorsPicks />
      </div>
    </div>
  );
}
