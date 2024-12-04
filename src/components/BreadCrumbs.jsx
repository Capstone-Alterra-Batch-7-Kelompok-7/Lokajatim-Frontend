import { Link } from "react-router-dom";

const BreadCrumbs = ({itemNav}) => {
  return (
    <>
      <div className="breadcrumbs text-sm bg-[#D9D9D9] text-black px-6 rounded-md">
        <ul className="">
        {itemNav.map((item, index) =>(
          <li className="" key={item.id}>
            <Link to={item.href} className={`${index === itemNav.length - 1 ? "font-medium" : ""}`}>{item.title}</Link>
          </li>
        ) 
        )}
        </ul>
      </div>
    </>
  );
}

export default BreadCrumbs