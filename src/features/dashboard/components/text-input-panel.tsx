"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants";

export function TextInputPanel() {
    const [text, setText] = useState("");
    const router = useRouter();

    const handleGenerate = () => {
        // 去除字符串两端的空白字符
        const trimmed = text.trim();
        if (!trimmed) return;

        router.push(`/text-to-speech?text=${encodeURIComponent(trimmed)}`);
    };

    return (
        <div className="
      rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_white]
    ">
            <div className="rounded-[20px] bg-[#F9F9F9] p-1">
                <div className="space-y-4 rounded-2xl bg-white p-2 drop-shadow-xs">
                    <Textarea
                        placeholder="开始在此处输入或粘贴您的文本..."
                        className="min-h-35 resize-none border-0 bg-transparent   shadow-none focus-visible:ring-0"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxLength={TEXT_MAX_LENGTH}
                    />

                    <div className="flex items-center justify-between">
                        <Badge variant="outline" className="gap-1.5 border-dashed">
                            <Coins className="size-3 text-chart-5" />
                            <span className="text-xs">
                                {text.length === 0 ? (
                                    "输入估算"
                                ) : (
                                    <>
                                        <span className="tabular-nums">
                                            {/* toFixed 将数字格式化为保留指定小数位数的字符串。 */}
                                            ￥{(text.length * 0.0003 * 7).toFixed(4)}
                                        </span>{" "}
                                        估计
                                    </>
                                )}
                            </span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                            {text.length.toLocaleString()} / {TEXT_MAX_LENGTH.toLocaleString()} 字符
                        </span>
                    </div>
                </div>


                <div className="flex items-center justify-end p-3">
                    <Button
                        size="sm"
                        disabled={!text.trim()}
                        onClick={handleGenerate}
                        className="w-full lg:w-auto"
                    >
                        生成语音
                    </Button>
                </div>
            </div>
        </div>
    )
}