

import { useState, useEffect } from "react";
import { Play, Eye, Users, Loader, CheckCircle } from "lucide-react";

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
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
        <div className="text-center">
          <Loader size={48} className="animate-spin text-[#FF0000] mx-auto mb-4" />
          <p className="text-[#AAAAAA] text-lg">Loading YouTube channel...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F0F0F] text-center px-4">
        <div className="bg-[#272727] rounded-xl p-8 max-w-md">
          <p className="text-[#FF0000] mb-6 text-lg">{error}</p>
          <button
            onClick={fetchYouTubeData}
            className="bg-[#FF0000] text-white px-8 py-3 rounded-full hover:bg-[#CC0000] transition-all font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Main Content
  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-20 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto">
        {/* Channel Banner */}
        {channelInfo && (
          <div className="mb-6 sm:mb-8">
            {/* Banner Image */}
            <div
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 rounded-xl bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${channelInfo.banner})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Channel Info Card */}
            <div className="bg-[#212121] rounded-xl p-4 sm:p-6 mt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1 w-full sm:w-auto">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center gap-2 flex-wrap">
                    {channelInfo.title}
                    <CheckCircle size={24} className="text-[#AAAAAA] flex-shrink-0" fill="#AAAAAA" />
                  </h1>
                  <p className="text-[#AAAAAA] mb-4 text-sm sm:text-base">
                    Tech Reviews • Tutorials • Comparisons
                  </p>
                  <div className="flex flex-wrap gap-4 sm:gap-6 text-[#AAAAAA] text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="flex-shrink-0" />
                      <span className="font-medium">{formatNumber(channelInfo.subscribers)}</span>
                      <span className="hidden xs:inline">subscribers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={18} className="flex-shrink-0" />
                      <span className="font-medium">{formatNumber(channelInfo.totalViews)}</span>
                      <span className="hidden xs:inline">views</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://www.youtube.com/${channelInfo.customUrl || "channel/" + channelId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#FF0000] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#CC0000] transition-all hover:scale-105 text-center whitespace-nowrap"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 px-1">
              Featured Video
            </h2>
            <a
              href={featuredVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative rounded-xl overflow-hidden bg-[#212121]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#FF0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play size={32} className="text-white ml-1 sm:ml-2" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/90 px-2 py-1 rounded text-xs sm:text-sm text-white font-semibold">
                  {featuredVideo.duration}
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-white font-semibold text-base sm:text-lg lg:text-xl line-clamp-2 group-hover:text-[#FF0000] transition-colors">
                  {featuredVideo.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-[#AAAAAA] text-xs sm:text-sm">
                  <Eye size={14} />
                  <span>{formatNumber(featuredVideo.views)} views</span>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Latest Videos Grid */}
        {videos.length > 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 px-1">
              Latest Uploads
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {videos.slice(1).map((v) => (
                <a
                  key={v.id}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#212121] rounded-xl overflow-hidden hover:bg-[#272727] transition-all"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FF0000] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-2xl">
                        <Play size={20} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-black/90 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded font-semibold">
                      {v.duration}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-white font-medium text-sm sm:text-base line-clamp-2 mb-2 group-hover:text-[#AAAAAA] transition-colors leading-snug">
                      {v.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#AAAAAA] text-xs sm:text-sm">
                      <Eye size={14} className="flex-shrink-0" />
                      <span>{formatNumber(v.views)} views</span>
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