import { Stack, Box } from '@mui/material';

const Videos = ({ videos }) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((items, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}

        </Box>
      ))}
    </Stack>
  )
}

export default Videos