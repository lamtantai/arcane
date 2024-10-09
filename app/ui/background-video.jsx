export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      className='absolute top-0 left-0 w-full h-full object-cover'
    >
      <source
        src='https://i.imgur.com/aiC7e8P.mp4'
        // src='./videos/arcane2-trailer.mp4'
        type='video/mp4'
      />
    </video>
  );
}
