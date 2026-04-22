import { cn } from "@/lib/utils";

const stats = [
  { number: "200+", label: "服务国家及地区" },
  { number: "2亿+", label: "全球个人用户" },
  { number: "214,000+", label: "企业客户及开发者" },
  { number: "100+", label: "企业服务覆盖国家" },
];

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">MiniMax</h2>
          <p className="text-xl text-white/60">
            全球领先的通用人工智能科技公司
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base text-white/70 leading-relaxed text-left">
            自2022年初成立以来，我们以"与所有人共创智能"为使命，致力于推动人工智能科技前沿发展，实现通用人工智能（AGI）。MiniMax
            自主研发了一系列多模态通用大模型，具备强大的代码和 Agent
            能力，以及超长上下文处理能力，能够理解、生成并整合包括文本、音频、图像、视频和音乐在内的多种模态。
          </p>
          <p className="text-base text-white/70 leading-relaxed text-left mt-4">
            基于这些自研模型，我们面向全球推出一系列 AI
            原生产品，包括 MiniMax Agent、海螺AI、MiniMax Audio、星野等，以及面向企业和开发者的开放平台，共同为全球用户提供极致的智能体验。
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-8 px-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}