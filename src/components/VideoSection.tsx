import { useEffect, useState } from "react";
import { Play, Eye } from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  url: string;
}

export function VideoSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelId = "UCby31aj160Uc0u59lvUxlsQ"; // your channel ID

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1️⃣ Fetch latest 8 video IDs from channel
      const searchRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=8`
      );
      const searchData = await searchRes.json();
      if (!searchRes.ok || !searchData.items) throw new Error("Failed to fetch videos");

      const videoIds = searchData.items
        .map((v: any) => v.id.videoId)
        .filter((id: string) => id)
        .join(",");

      // 2️⃣ Fetch video details (views, duration, etc.)
      const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,contentDetails,statistics`
      );
      const statsData = await statsRes.json();
      if (!statsRes.ok || !statsData.items) throw new Error("Failed to fetch video details");

      // 3️⃣ Format the videos for display
      const formattedVideos: Video[] = statsData.items.map((v: any) => ({
        id: v.id,
        title: v.snippet.title,
        thumbnail: v.snippet.thumbnails.high.url,
        views: formatNumber(v.statistics.viewCount),
        duration: formatDuration(v.contentDetails.duration),
        url: `https://www.youtube.com/watch?v=${v.id}`,
      }));

      setVideos(formattedVideos);
    } catch (err) {
      console.error("Error fetching YouTube videos:", err);
      setError("Failed to load YouTube videos.");
    } finally {
      setLoading(false);
    }
  };

  // 🔧 Format numbers (views)
  const formatNumber = (num: string) => {
    const n = parseInt(num);
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
    return n.toString();
  };

  // 🔧 Convert ISO 8601 duration to mm:ss
  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match?.[1] ? parseInt(match[1]) : 0);
    const minutes = (match?.[2] ? parseInt(match[2]) : 0);
    const seconds = (match?.[3] ? parseInt(match[3]) : 0);
    return `${hours ? hours + ":" : ""}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  if (loading) {
    return (
      <section className="py-16 text-center">
        <p className="text-gray-500 dark:text-gray-400">Loading latest videos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center">
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={fetchYouTubeVideos}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Watch Our Latest Reviews
          </h2>
          <a
            href="https://youtube.com/@BrajBuzzTech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 font-semibold"
          >
            Subscribe to BrajBuzz Tech
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Eye size={14} className="mr-1" />
                  <span>{video.views} views</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
