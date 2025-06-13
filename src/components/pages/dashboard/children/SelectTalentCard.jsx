import { RxCross2 } from 'react-icons/rx';
import { LiaFileAltSolid } from 'react-icons/lia';
import { MdAccessTime, MdOutlineStarBorder } from 'react-icons/md';
import { LuMessageSquare } from 'react-icons/lu';

const statusMap = {
    approved: {
        text: 'Approved',
        textColor: 'text-[#16A34A]',
        bgColor: 'bg-[#DCFCE7]',
        Icon: MdAccessTime,
    },
    pending: {
        text: 'Pending',
        textColor: 'text-[#974D0E]',
        bgColor: 'bg-[#FEF9C3]',
        Icon: MdOutlineStarBorder,
    },
    default: {
        text: 'Contract',
        textColor: 'text-[#2764EB]',
        bgColor: 'bg-[#DBEAFE]',
        Icon: LiaFileAltSolid,
    },
};

const SelectTalentCard = ({ name, desination, company, match, status }) => {
    const { text, textColor, bgColor, Icon } = statusMap[status] || statusMap.default;
    const sortName = name.split(' ').splice(0, 2).map((n) => n[0]).join('').toUpperCase();
    console.log(sortName)

    return (
        <div className="talent-card rounded-xl border border-[#d9d9d9] px-3 py-4 mb-5">
            <div className="flex gap-2.5">
                <div className="h-[42px] w-[42px] rounded-full bg-[#F1F5F9] text-[#305EEB] text-sm font-semibold flex items-center justify-center">
                    {sortName}
                </div>
                <div className="relative flex flex-grow flex-col">
                    <h5 className="font-semibold text-sm">{name}</h5>
                    <h6 className="font-semibold text-xs text-[#d9d9d9]">{desination}</h6>
                    <h6 className="font-semibold text-xs text-[#d9d9d9]">{company}</h6>
                    <RxCross2
                        size={24}
                        className="p-1 absolute right-0 top-0 cursor-pointer hover:shadow"
                    />
                </div>
            </div>

            <div className="my-4 flex justify-between">
                <div className="border border-[#d9d9d9] rounded-4xl px-2 py-0.5 text-sm font-semibold">
                    {match}% Match
                </div>
                <div
                    className={`rounded-4xl px-2 py-0.5 text-sm font-semibold flex items-center gap-1 ${textColor} ${bgColor}`}
                >
                    <Icon size={16} /> {text}
                </div>
            </div>

            <div className="flex justify-between">
                <div className="border border-[#d9d9d9] rounded-md gap-1 px-2 py-1.5 text-xs font-semibold flex items-center cursor-pointer hover:shadow">
                    <LuMessageSquare size={16} /> Message
                </div>
                <div className="border border-[#d9d9d9] rounded-md gap-1 px-2 py-1.5 text-xs font-semibold flex items-center cursor-pointer hover:shadow">
                    <LiaFileAltSolid size={16} /> Contract
                </div>
            </div>
        </div>
    );
};

export default SelectTalentCard;
