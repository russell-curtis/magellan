'use client'

import clsx from "clsx";
import {
  Home,
  Users,
  Folder,
  MessagesSquare,
  Bell,
  Building2,
  Settings,
  CreditCard,
  MessageCircleIcon,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Chat",
    href: "/dashboard/chat",
    icon: MessageCircleIcon,
  },
  {
    label: "Upload",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    label: "Clients",
    href: "/dashboard/clients",
    icon: Users,
  },
  {
    label: "Programs",
    href: "/dashboard/programs",
    icon: Folder,
  },
  {
    label: "Documents",
    href: "/dashboard/documents",
    icon: Folder,
  },
  {
    label: "Messages",
    href: "/dashboard/messages",
    icon: MessagesSquare,
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    label: "Marketplace",
    href: "/dashboard/marketplace",
    icon: Building2,
  },
  {
    label: "Payment",
    href: "/dashboard/payment",
    icon: CreditCard,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="h-full w-64 border-r bg-background hidden md:flex flex-col">
      <div className="flex h-[3.45rem] items-center border-b px-4">
        <Link
          prefetch={true}
          className="flex items-center font-semibold hover:cursor-pointer"
          href="/"
        >
          <span>Magellan</span>
        </Link>
      </div>

      <nav className="flex flex-col h-full justify-between items-start w-full">
        <div className="w-full space-y-1 p-4">
          {navItems.map((item) => (
            <div
              key={item.href}
              onClick={() => router.push(item.href)}
              className={clsx(
                "flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm transition-colors hover:cursor-pointer",
                pathname === item.href || pathname?.startsWith(item.href + "/")
                  ? "bg-muted text-foreground"
                  : "hover:bg-muted/40 text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-full mt-auto">
          <div className="px-4 pb-4">
            <div
              onClick={() => router.push("/dashboard/settings")}
              className={clsx(
                "flex items-center w-full gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:cursor-pointer",
                pathname === "/dashboard/settings" || pathname?.startsWith("/dashboard/settings/")
                  ? "bg-muted text-foreground"
                  : "hover:bg-muted/40 text-muted-foreground"
              )}
            >
              <Settings className="h-4 w-4" />
              Settings
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
} 