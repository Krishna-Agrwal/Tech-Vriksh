function extractDriveId(url: string) {
  const match = url.match(/\/d\/([^/]+)/) ?? url.match(/[?&]id=([^&]+)/);
  return match ? match[1] : url;
}

export function DriveVideoEmbed({ url, title }: { url: string; title: string }) {
  const fileId = extractDriveId(url);

  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={title}
        allow="autoplay"
        className="aspect-video w-full"
        loading="lazy"
      />
    </div>
  );
}
