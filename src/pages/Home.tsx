

// import { HeroSection } from '../components/HeroSection';
// import { TrendingReviews } from '../components/TrendingReviews';
// import { OurPartners } from '../components/OurPartners';
// import { VideoSection } from '../components/VideoSection';

// export function Home() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
//       <div className="pt-16">
//         <div className="container mx-auto px-4 py-8">
//           <HeroSection />
//         </div>

//         <TrendingReviews />

//         {/* Updated: Replaced LatestReviewsCarousel with OurPartners */}
//         <OurPartners />

//         <VideoSection />
//       </div>
//     </div>
//   );
// }



import { HeroSection } from '../components/HeroSection';
import { UnboxingGallery } from '../components/UnboxingGallery';
import { OurPartners } from '../components/OurPartners';
import { VideoSection } from '../components/VideoSection';

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <HeroSection />
        </div>

        {/* Replaced TrendingReviews */}
        <UnboxingGallery />

        <OurPartners />
        <VideoSection />
      </div>
    </div>
  );
}
