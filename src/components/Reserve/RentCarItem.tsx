interface RentCarProps {
  img: string;
  name: string;
  licenceNumber: string;
}

const RentCarItem = ({ rentCar }: { rentCar: RentCarProps }) => {
  return (
    <div>
      <img
        src={`${rentCar.img}?w=164&h=164&fit=crop&auto=format`}
        alt={rentCar.name}
        loading="lazy"
      />
    </div>
  );
};
export default RentCarItem;
