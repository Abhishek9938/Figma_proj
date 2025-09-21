import Card from "../Card/Card"
import { COLORS } from "../../../styles/colors";

function ChartCard() {
  const cardsData = [
    {id:1, title: "Orders", value: "1,219", change: "-0.03",bgcolor:COLORS.LIGHT },
    {id:2, title: "Revenue", value: "$695", change: "15.03",bgcolor:COLORS.LIGHT },
    {id:3, title: "Growth", value: "30.1%", change: "6.08",bgcolor:COLORS.PURPLE },
    {id:4, title: "Customers", value: "3,781", change: "11.01",bgcolor:COLORS.BLUE}
  ];
  return (
    <>
    <div className="card-chart grid grid-cols-2 gap-4" style={{width: "45%"}}>
      {cardsData.map((card, id) => (
        <Card 
          key={id}
          title={card.title}
          value={card.value}
          change={card.change}
          bgcolor={card.bgcolor}
        />
      ))}
    </div>
    </>
  )
}

export default ChartCard