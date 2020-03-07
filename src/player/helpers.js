import { getQualifiedStreamUrl as getSoundCloudUrl } from '@/soundcloud';

export function getQualifiedStreamUrl(streamUrl) {
  if (streamUrl.includes('soundcloud.com')) {
    return getSoundCloudUrl(streamUrl);
  }
  return streamUrl;
}