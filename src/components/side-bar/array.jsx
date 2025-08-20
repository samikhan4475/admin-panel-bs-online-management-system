import { BiSolidBank } from "react-icons/bi";
import { IoMdBeaker } from "react-icons/io";
import { BsPeopleFill, BsClipboard2CheckFill, BsFilterSquare } from "react-icons/bs";

const SideArray = [
    {
        id: 1,
        Name: 'Dashboard',
        route: '/dashboard',
        icon: <BiSolidBank />
    },
    // {
    //     id: 2,
    //     Name: 'Enrollments',
    //     route: '/order',
    //     icon: <IoMdBeaker />
    // },
    {
        id: 3,
        Name: 'Users',
        route: '/user',
        icon: <BsPeopleFill />
    },

    // {
    //     id: 5,
    //     Name: 'Analytics',
    //     route: '/analytic',
    //     icon: <BsFilterSquare />
    // },
];
export { SideArray }