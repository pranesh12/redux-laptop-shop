import React from "react";
import { useEffect } from "react";
import LaptopList from "../../Components/LaptopList/LaptopList";
import { useDispatch, useSelector } from "react-redux";
import { getAllLaptop } from "../../Actions/laptopAction";

const Home = () => {
  const dispatch = useDispatch();
  const laptopsState = useSelector((state) => state.getAllLaptopReducer);
  const { laptops, loading, error } = laptopsState;
  console.log(laptops);

  useEffect(() => {
    dispatch(getAllLaptop());
  }, []);
  return (
    <div>
      <div className="row  gx-3 gy-1">
        {laptops.map((laptop) => {
          return (
            <div className="col">
              <LaptopList laptop={laptop} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
