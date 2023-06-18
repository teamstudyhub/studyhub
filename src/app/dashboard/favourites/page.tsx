import Card from "@/components/fav";

export default function Page() {
    return (
      <div>
        <Card title="Operating system" likes={10} dislikes={3} comments={2} />
      </div>
    );
  }