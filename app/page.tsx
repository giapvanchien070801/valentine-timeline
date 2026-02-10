import Image from "next/image";

const timelineItems = [
  {
    time: "8h-9h",
    icon: "bed",
    title: "Thức dậy & Chuẩn bị",
    description:
      "Thức dậy, vệ sinh cá nhân, và lên đồ nhẹ nhàng cho một ngày hẹn hò ngọt ngào.",
    side: "left",
  },
  {
    time: "9h-10h45",
    icon: "dining",
    title: "Ăn sáng cùng nhau",
    description:
      "Bắt đầu ngày mới với bữa sáng ấm cúng, thưởng thức những món ăn yêu thích.",
    side: "right",
  },
  {
    time: "10h45-12h30",
    icon: "shopping",
    title: "Mua quà cho Hường",
    description:
      "Dành thời gian chọn món quà đặc biệt để dành tặng Hường (Hường sẽ trực tiếp chọn món quà yêu thích)",
    side: "left",
  },
  {
    time: "12h30-13h30",
    icon: "dining",
    title: "Ăn trưa",
    description: "Thưởng thức món phở gà thơm ngon, ấm lòng tại quán quen.",
    side: "right",
  },
  {
    time: "13h30-14h30",
    icon: "house",
    title: "Nghỉ ngơi tại phòng",
    description:
      "Về phòng nghỉ ngơi, thư giãn chuẩn bị cho buổi chiều vui chơi.",
    side: "left",
  },
  {
    time: "14h30-16h",
    icon: "bath",
    title: "Tắm & Lên đồ",
    description: "Tắm rửa và chuẩn bị những bộ đồ thật đẹp để đi chơi.",
    side: "right",
  },
  {
    time: "16h-16h30",
    icon: "car",
    title: "Di chuyển đến Hồ Tây",
    description:
      "Cùng nhau di chuyển đến Hồ Tây, tận hưởng không khí trong lành ngày cận tết.",
    side: "left",
  },
  {
    time: "16h30-18h30",
    icon: "paint",
    title: "Trải nghiệm Tô Tượng",
    description:
      "Thử tài tô tượng, tạo ra những tác phẩm nghệ thuật độc đáo của riêng hai người.",
    side: "right",
  },
  {
    time: "18h30-19h",
    icon: "car",
    title: "Di chuyển đi ăn tối",
    description: "Di chuyển đến địa điểm của bữa tối lãng mạn.",
    side: "left",
  },
  {
    time: "19h...",
    icon: "dining",
    title: "Ăn tối",
    description:
      "Ăn tối tại BÍT TẾT BÀ DUY hoặc NHẤT NƯỚNG. Kết thúc ngày Valentine lãng mạn với bữa tối ngon miệng và khoảng thời gian nghỉ ngơi.",
    side: "right",
  },
];

function Icon({ name }: { name: string }) {
  const className = "w-5 h-5 shrink-0 text-[#e91e63]";
  switch (name) {
    case "bed":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "dining":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      );
    case "shopping":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      );
    case "house":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "bath":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      );
    case "paint":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      );
    case "car":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      {/* Top nav */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-[#2d2d2d] px-6 py-4 text-white">
        <span className="flex items-center gap-2 font-medium">
          <span className="text-[#f8b4c4]">♥</span> Tình Yêu Ơi
        </span>
        <span className="font-medium">Chiến & Hường</span>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[420px] flex-col items-center justify-center bg-[#fce4ec] px-4 py-20 md:min-h-[520px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-bg1.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-script text-4xl font-normal text-white drop-shadow md:text-6xl lg:text-7xl">
            Ngày Valentine Của Chiến & Hường
          </h1>
          <p className="mt-3 text-lg text-white drop-shadow md:text-xl">
            Khoảnh khắc đáng nhớ, tình yêu vĩnh cửu
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <h2 className="font-script text-center text-4xl text-black md:text-5xl">
          Lịch Trình Ngày Đặc Biệt
        </h2>
        <div className="mx-auto mt-2 h-0.5 w-24 bg-[#f8b4c4]" aria-hidden />

        <div className="mt-12 grid gap-x-6 gap-y-8 md:grid-cols-2 md:gap-x-10">
          <div className="flex flex-col gap-8">
            {timelineItems
              .filter((_, i) => i % 2 === 0)
              .map((item, i) => (
                <div
                  key={item.time + i}
                  className="flex rounded-2xl bg-[#f5f5f5] p-5 shadow-md transition hover:shadow-lg"
                >
                  <div className="flex flex-1 flex-col">
                    <div className="mb-3 flex items-center gap-2">
                      <Icon name={item.icon} />
                      <span className="rounded-lg bg-[#f06292] px-2.5 py-1 text-sm font-medium text-white">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="mb-2 font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#374151]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-0 flex flex-col gap-8 md:mt-16">
            {timelineItems
              .filter((_, i) => i % 2 === 1)
              .map((item, i) => (
                <div
                  key={item.time + i}
                  className="flex rounded-2xl bg-[#f5f5f5] p-5 shadow-md transition hover:shadow-lg"
                >
                  <div className="flex flex-1 flex-col">
                    <div className="mb-3 flex items-center gap-2">
                      <Icon name={item.icon} />
                      <span className="rounded-lg bg-[#f06292] px-2.5 py-1 text-sm font-medium text-white">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="mb-2 font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#374151]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <h2 className="font-script text-center text-4xl text-black md:text-5xl">
          Lời Nhắn Từ Trái Tim
        </h2>
        <div className="mt-10 rounded-2xl bg-[#fce4ec] p-8 shadow-md md:p-10">
          <div className="flex justify-center gap-1">
            <svg
              className="h-8 w-8 text-[#c2185b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <svg
              className="h-8 w-8 text-[#c2185b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <p className="mt-4 text-center font-script text-xl italic leading-relaxed text-[#374151] md:text-2xl">
            Mỗi khoảnh khắc bên em đều là một món quà. Chúc mừng Ngày Valentine
            của chúng ta, Hường yêu dấu! Anh yêu em rất nhiều.
          </p>
          <p className="mt-6 text-right text-sm text-[#374151]">
            – Chiến & Hường
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center">
        <p className="text-sm text-gray-400">© 2026 Chiến & Hường</p>
      </footer>
    </div>
  );
}
