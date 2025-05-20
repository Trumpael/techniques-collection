import Image from "next/image";
import HomeCard from "@/components/HomeCard";
import { contentList } from "@/constant/contentList";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <h3 className="text-2xl font-bold">前端技巧收集</h3>
      <div className="grid grid-cols-5 gap-x-[10px] gap-y-[20px] w-full p-4">
        {contentList.map((item) => (
          <div key={item.id} className="card-container" style={styles.cardContainer}>
            <HomeCard title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "1/1",
    width: "100%",
    height: "100%",
  },
};
