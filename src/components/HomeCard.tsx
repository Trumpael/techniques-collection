import cardBg from '@/assets/images/cardBg.png';

interface HomeCardProps {
  title: string;
}

export default function HomeCard({ title }: HomeCardProps) {
  return (
    <div className="w-full h-full rounded-lg shadow-md flex items-center justify-center" style={styles.card}>
      <div className="text-white text-2xl font-bold text-center p-4">{title}</div>
    </div>
  );
}

const styles = {
  card: {
    backgroundImage: `url(${cardBg.src || cardBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};
