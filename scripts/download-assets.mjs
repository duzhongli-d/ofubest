// Download all assets from minimaxi.com
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../public/images');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// All discovered images from the page
const images = [
  // Nav icons
  { url: 'https://filecdn.minimax.chat/public/969d635c-cab6-45cc-8d61-47c9fe40c81f.png', name: 'nav-logo.png' },
  { url: 'https://filecdn.minimax.chat/public/00874e9c-ad34-4f9f-8537-47e535ec2691.png', name: 'nav-text-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/26f493fc-7e47-4583-ae9b-7a5f85d6228a.png', name: 'nav-voice-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/0f112b95-97b8-4e67-9ef9-e1b869e8342d.png', name: 'nav-video-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/d01e8064-2baf-4c26-adc8-53e9dfaa252d.png', name: 'nav-music-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/e0770c40-a75e-4dc9-a8dc-6430ce1e6d4f.png', name: 'nav-product-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/f4a709b7-c83c-4b29-88ab-00f2826f8667.png', name: 'nav-platform-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/0052eccd-8fbd-485b-9007-3d6ef1a80a76.png', name: 'nav-about-icon.png' },

  // Hero carousel images
  { url: 'https://filecdn.minimax.chat/public/573b4f5a-81f8-4d82-9df4-cdcd84f91dc0.png', name: 'hero-title-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/6e33be41-02a0-4d1f-bea9-8fd4d2d79cef.png', name: 'music-cover.png' },
  { url: 'https://cdn.hailuoai.video/hailuo-voice-web/home/girl-in-pink-dress-lying-on-bed-1.png', name: 'music-pop.png' },
  { url: 'https://filecdn.minimax.chat/public/8dee2f0a-f451-409a-9b7a-9a75856219ed.png', name: 'music-hyperpop.png' },
  { url: 'https://filecdn.minimax.chat/public/523f70b9-c1b5-43c3-bd21-e2cafb2e366d.png', name: 'music-electronic.png' },
  { url: 'https://filecdn.minimax.chat/public/54e10790-11da-43bc-8dac-c3474619581d.png', name: 'music-trap.png' },
  { url: 'https://filecdn.minimax.chat/public/abc511a4-a29f-4a42-80c3-50d282b115ab.png', name: 'music-edm.png' },
  { url: 'https://filecdn.minimax.chat/public/4859cd5e-9b6c-4b59-9e29-b0352e1f865a.png', name: 'hero-divider.png' },
  { url: 'https://filecdn.minimax.chat/public/c5b4442f-ab8b-4d97-9119-8504670b0097.png', name: 'm27-title-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/b35199e2-a4f9-4941-a195-22a4bed9571d.png', name: 'm27-bg-1.png' },
  { url: 'https://filecdn.minimax.chat/public/1d12cf5d-d62f-4164-9db8-46c1437198eb.png', name: 'm27-bg-2.png' },

  // Speech 2.8 section
  { url: 'https://filecdn.minimax.chat/public/ddcbf1ee-7d28-41db-9011-e2091fce6b05.png', name: 'voice-sample-1.png' },
  { url: 'https://filecdn.minimax.chat/public/a748e3ba-3697-42e4-8aec-d306055b545c.png', name: 'voice-sample-2.png' },
  { url: 'https://filecdn.minimax.chat/public/dcda5c11-3afe-4a6c-a19c-df91effa1469.png', name: 'voice-sample-3.png' },
  { url: 'https://filecdn.minimax.chat/public/038e0497-a3bd-406c-a419-a29af9c975ef.png', name: 'voice-sample-icon.png' },

  // Banner images
  { url: 'https://filecdn.minimax.chat/public/f4cd68ea-b5cf-4f77-987d-907513918706.png', name: 'agent-title-icon.png' },
  { url: 'https://filecdn.minimax.chat/public/28514d66-3abc-4982-979e-2e7908d808f6.png', name: 'm2her-title-icon.png' },

  // Model matrix images
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2F57088b0d-df95-402d-8f5f-68afd3954347.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'model-m27.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2F11aa2f9c-0fe0-486a-b7a0-d2f9d91a5d90.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'model-music26.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2Fbdbf0ecb-43b3-4951-9a7b-d1c935df7719.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'model-hailuo23.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2F1f93039d-67d0-4a41-818e-ca309a9e642b.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'model-speech28.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2Fb0b34039-35c8-4cde-8afa-23b941f95512.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'model-m2her.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2Fb020d5be-0cd4-4293-b727-3e7b96bfb210.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'model-hailuo-video.png' },

  // Product matrix images
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2F2b22e787-ac59-4acb-b065-bf5ababe85d8.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'product-agent.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2F3282663b-8898-49cb-8f47-80e185d96e1a.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'product-audio.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2F5feb4c2f-7057-4fa8-b9af-2f9bce6005d9.png&w=3840&q=75', name: 'product-video-agent.png' },
  { url: 'https://www.minimaxi.com/_next/image?url=https%3A%2F%2Ffilecdn.minimax.chat%2Fpublic%2Fda85ad91-c99d-48f6-92cf-9f2866cca901.png%3Fx-oss-process%3Dimage%2Fformat%2Cwebp&w=3840&q=75', name: 'product-xingye.png' },

  // Footer QR codes
  { url: 'https://filecdn.minimax.chat/public/c2d46d3e-f122-41f3-bc7f-31d5a972fbbc.png', name: 'qr-minimax.png' },
  { url: 'https://filecdn.minimax.chat/public/1b413c33-c6db-4910-a29e-d51d37cfbf15.jpeg', name: 'qr-kaiping.png' },
  { url: 'https://filecdn.minimax.chat/public/20260415-184628.jpeg', name: 'qr-official.png' },
  { url: 'https://filecdn.minimax.chat/public/d44e7618-0c3a-485a-9c87-14d848f0e85d.jpeg', name: 'qr-feishu.png' },
  { url: 'https://filecdn.minimax.chat/public/6bef0882-3057-455c-a4ad-2f63ed292be2.png', name: 'footer-logo.png' },

  // Other assets
  { url: 'https://filecdn.minimax.chat/public/66c7f51b-e8e3-4436-8d49-bb37f61af867.png', name: 'token-plan-bg.png' },
  { url: 'https://filecdn.minimax.chat/public/2c0ef80d-3afe-4f9b-aaea-8bd8ce47a271.png', name: 'token-plan-overlay.png' },
  { url: 'https://filecdn.minimax.chat/public/09168ee4-f262-495b-907f-602672c09e36.png', name: 'hailuo23-bg.png' },
  { url: 'https://filecdn.minimax.chat/public/312acec4-4d23-4529-9a0e-255a0d46fe52.png', name: 'm2her-tilt-1.png' },
  { url: 'https://filecdn.minimax.chat/public/366e4fd1-461b-4e85-94ea-3c2bd147eb8a.png', name: 'm2her-tilt-2.png' },
  { url: 'https://filecdn.minimax.chat/public/fe926636-e916-4a7c-83e9-3e87f5760835.png', name: 'agent-tilt.png' },
  { url: 'https://filecdn.minimax.chat/public/483375e8-3d08-4021-946d-2b2f42d7a4b1.png', name: 'speech28-bg-desktop.png' },
  { url: 'https://filecdn.minimax.chat/public/9da48a1d-fd7a-42a3-a972-1397dbded1b4.png', name: 'speech28-bg-mobile.png' },
];

async function downloadImage(item) {
  try {
    const response = await fetch(item.url);
    if (!response.ok) {
      console.log(`Failed to fetch ${item.name}: ${response.status}`);
      return false;
    }
    const buffer = await response.arrayBuffer();
    const filePath = path.join(assetsDir, item.name);
    fs.writeFileSync(filePath, Buffer.from(buffer));
    console.log(`Downloaded: ${item.name}`);
    return true;
  } catch (error) {
    console.log(`Error downloading ${item.name}: ${error.message}`);
    return false;
  }
}

async function downloadAll() {
  console.log(`Starting asset download to ${assetsDir}`);
  let successCount = 0;
  let failCount = 0;

  // Download in batches of 4
  for (let i = 0; i < images.length; i += 4) {
    const batch = images.slice(i, i + 4);
    const results = await Promise.all(batch.map(downloadImage));
    successCount += results.filter(r => r).length;
    failCount += results.filter(r => !r).length;
  }

  console.log(`\nDownload complete: ${successCount} succeeded, ${failCount} failed`);
}

downloadAll().catch(console.error);