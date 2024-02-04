import videos from "../../../static/data/videos.json"

export default function RenderVideos() {
  return (
    <div>
      {videos.map((video) => (
        <div style={{margin: "15px"}}>
          {" "}
          <a
            href={video.url}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            {video.title}
          </a>{" "}
          - {video.speakers.join(", ")}{" "}
        </div>
      ))}
    </div>
  )
}
