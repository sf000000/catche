import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";

interface VideoPreviewProps {
    title: string;
    src: string;
}

export function VideoPreview({ title, src }: VideoPreviewProps) {
    const isImageUrl = /\.(jpg|jpeg|png|gif|webp)$/i.test(src);

    return (
        <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
            <MediaPlayer
                src={src}
                viewType="video"
                streamType="on-demand"
                logLevel="warn"
                crossOrigin
                playsInline
                title={title}
                poster={isImageUrl ? src : undefined}
                autoPlay={true}
            >
                <MediaProvider />
                <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
        </div>
    );
}
