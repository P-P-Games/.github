import {ReactNode} from "react";
import clsx from "clsx";
import styles from "@site/src/components/HomepageFeatures/styles.module.css";
import Heading from "@theme/Heading";


type YouTubeVideoItem = {
    url: string;
};


export function YouTubeVideo({urlSuffix}: YouTubeVideoItem): ReactNode {
    const url = 'https://www.youtube.com/embed/' + urlSuffix;
    return (
        <iframe width="560" height="315" src={url}
                title="YouTube video player" frameBorder="0" allowFullScreen>
        </iframe>
    );
}



