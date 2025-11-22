"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DiscordIcon } from "./Icons";

interface DiscordMember {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  status: "online" | "idle" | "dnd" | "offline";
  avatar_url: string;
}

interface DiscordChannel {
  id: string;
  name: string;
  position: number;
}

interface DiscordWidgetData {
  id: string;
  name: string;
  instant_invite: string;
  channels: DiscordChannel[];
  members: DiscordMember[];
  presence_count: number;
}

const StatusIndicator = ({ status }: { status: string }) => {
  const statusColors = {
    online: "bg-emerald-500",
    idle: "bg-amber-500",
    dnd: "bg-red-500",
    offline: "bg-zinc-400",
  };

  return (
    <div
      className={`h-2.5 w-2.5 rounded-full ${
        statusColors[status as keyof typeof statusColors] || statusColors.offline
      }`}
    />
  );
};

export default function DiscordWidget() {
  const [data, setData] = useState<DiscordWidgetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch(
          "https://discord.com/api/guilds/1439977959741067287/widget.json",
          { cache: "no-store" }
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        setData(json);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordData();
  }, []);

  if (loading) {
    return (
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <div className="w-[280px] rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Carregando Discord...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
      <div className="w-[280px] max-h-[500px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/95 backdrop-blur-sm">
        {/* Header */}
        <div className="border-b border-zinc-200 bg-zinc-100 px-3 py-2.5 dark:border-zinc-700 dark:bg-zinc-800/50">
          <div className="flex items-center gap-2">
            <DiscordIcon className="h-4 w-4 text-[#5865F2]" />
            <h3 className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">{data.name}</h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[380px] overflow-y-auto">
          {/* Members Online */}
          <div className="border-b border-zinc-200 px-3 py-2.5 dark:border-zinc-700">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Membros Online
              </span>
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {data.presence_count}
              </span>
            </div>
            <div className="space-y-1.5">
              {data.members.slice(0, 4).map((member) => (
                <div key={member.id} className="flex items-center gap-2">
                  <div className="relative flex-shrink-0">
                    {member.avatar_url ? (
                      <Image
                        src={member.avatar_url}
                        alt={member.username}
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full"
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-300 text-[10px] font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                        {member.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="absolute -bottom-0.5 -right-0.5 rounded-full border-2 border-zinc-50 dark:border-zinc-900">
                      <StatusIndicator status={member.status} />
                    </div>
                  </div>
                  <span className="flex-1 truncate text-xs text-zinc-700 dark:text-zinc-300">
                    {member.username}
                    {member.discriminator !== "0000" && `#${member.discriminator}`}
                  </span>
                </div>
              ))}
              {data.members.length > 4 && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  +{data.members.length - 4} outros
                </p>
              )}
            </div>
          </div>

          {/* Channels */}
          {data.channels.length > 0 && (
            <div className="border-b border-zinc-200 px-3 py-2.5 dark:border-zinc-700">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Canais
              </span>
              <div className="space-y-1">
                {data.channels.slice(0, 4).map((channel) => (
                  <div
                    key={channel.id}
                    className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="text-zinc-400 dark:text-zinc-500">#</span>
                    <span className="truncate">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Join Button */}
        <div className="border-t border-zinc-200 p-3 dark:border-zinc-700">
          <a
            href={data.instant_invite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#4752C4]"
          >
            <DiscordIcon className="h-4 w-4" />
            Entrar no Discord
          </a>
        </div>
      </div>
    </div>
  );
}

