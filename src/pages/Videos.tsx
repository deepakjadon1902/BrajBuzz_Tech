import { useState, useEffect } from "react";
import { Play, Eye, Users, Loader } from "lucide-react";

interface ChannelInfo {
  title: string;
  subscribers: string;
  totalViews: string;
  customUrl: string;
  banner: string;
}

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  url: string;
}

export function Videos() {
  const [channelInfo, setChannelInfo] = useState<ChannelInfo | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [featuredVideo, setFeaturedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    fetchYouTubeData();
  }, []);

  const fetchYouTubeData = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1️⃣ Fetch Channel Info
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${apiKey}`
      );
      const channelData = await channelRes.json();
      if (!channelRes.ok || !channelData.items?.length)
        throw new Error("Failed to fetch channel info");

      const ch = channelData.items[0];
      const channelInfo: ChannelInfo = {
        title: ch.snippet.title,
        subscribers: ch.statistics.subscriberCount,
        totalViews: ch.statistics.viewCount,
        customUrl: ch.snippet.customUrl || ch.brandingSettings?.channel?.customUrl || "",
        banner:
          ch.brandingSettings?.image?.bannerExternalUrl ||
          "https://www.youtube.com/img/desktop/yt_1200.png",
      };
      setChannelInfo(channelInfo);

      // 2️⃣ Fetch Latest Videos
      const videoRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12`
      );
      const videoData = await videoRes.json();
      if (!videoRes.ok || !videoData.items?.length)
        throw new Error("Failed to fetch videos");

      const videoIds = videoData.items.map((v: any) => v.id.videoId).join(",");
      const videoStatsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,contentDetails,statistics`
      );
      const videoStats = await videoStatsRes.json();

      const formattedVideos: Video[] = videoStats.items.map((v: any) => ({
        id: v.id,
        title: v.snippet.title,
        thumbnail: v.snippet.thumbnails.high.url,
        views: v.statistics.viewCount,
        duration: formatDuration(v.contentDetails.duration),
        url: `https://www.youtube.com/watch?v=${v.id}`,
      }));

      setVideos(formattedVideos);
      setFeaturedVideo(formattedVideos[0]);
    } catch (err) {
      console.error("Error fetching YouTube data:", err);
      setError(err instanceof Error ? err.message : "Failed to load YouTube data");
    } finally {
      setLoading(false);
    }
  };

  // Helper: Format numbers
  const formatNumber = (num: string) => {
    const n = parseInt(num);
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
    return n.toString();
  };

  // Helper: Format YouTube ISO 8601 duration (PT#M#S → mm:ss)
  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match?.[1] && parseInt(match[1])) || 0;
    const minutes = (match?.[2] && parseInt(match[2])) || 0;
    const seconds = (match?.[3] && parseInt(match[3])) || 0;
    return `${hours ? hours + ":" : ""}${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <Loader size={48} className="animate-spin text-[#002366] dark:text-blue-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading YouTube channel...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] text-center">
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={fetchYouTubeData}
          className="bg-[#002366] text-white px-6 py-2 rounded-lg hover:bg-[#003399] transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Main Content
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Channel Info */}
        {channelInfo && (
          <div
            className="rounded-2xl mb-12 p-8 bg-cover bg-center relative overflow-hidden"
            style={{
              backgroundImage: `url(${channelInfo.banner})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-white">
              <div>
                <h2 className="text-3xl font-bold mb-2">{channelInfo.title}</h2>
                <p className="text-gray-200 mb-4">Tech Reviews • Tutorials • Comparisons</p>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <Users size={18} className="mr-2" />
                    {formatNumber(channelInfo.subscribers)} subscribers
                  </div>
                  <div className="flex items-center">
                    <Eye size={18} className="mr-2" />
                    {formatNumber(channelInfo.totalViews)} views
                  </div>
                </div>
              </div>
              <a
                href={`https://www.youtube.com/${channelInfo.customUrl || "channel/" + channelId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-0 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all hover:scale-105"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        )}

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Video
            </h2>
            <a
              href={featuredVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={40} className="text-white ml-2" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-xl">
                {featuredVideo.title}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-lg text-sm text-white">
                {featuredVideo.duration}
              </div>
            </a>
          </div>
        )}

        {/* Latest Videos Grid */}
        {videos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Latest Uploads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.slice(1).map((v) => (
                <a
                  key={v.id}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={26} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {v.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400">
                      {v.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Eye size={14} className="mr-1" />
                      {formatNumber(v.views)} views
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}