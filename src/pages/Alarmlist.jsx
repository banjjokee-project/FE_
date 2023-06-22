import React from 'react';
import { useNavigate } from "react-router-dom";

const Alarmlist = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="line mt-2 text-2xl font-medium text-center leading-9 tracking-tight text-gray-900">
                    Alarm
                </h2>
            </div>
            <div className="divider w-full my-0"></div>
            <div className="grid grid-flow-col-dense grid-cols-4 max-h-20">
                <img className="mx-6 my-4 w-14 h-12 content-center" src="/assets/iconnext.png" alt=""></img>
                <div className="col-span-3 col-start-2 pl-0.5 p-4"><div className="line text-md font-bold text-left">심장사상충 약</div>
                <div className="line text-md text-left">급여일이 얼마 남지 않았어요 !</div></div>
            </div>
            <div className="divider w-full my-0"></div>
            <div className="grid grid-flow-col-dense grid-cols-4 h-20">
                <img className="mx-6 my-4 w-14 h-12 content-center" src="/assets/iconnext.png" alt=""></img>
                <div className="col-span-3 col-start-2 pl-0.5 p-1"><div className="line text-md font-bold text-left">산책량</div>
                <div className="line text-md text-left">기록한 날이 꽤 지났네요. 기록을 활성화하고, 반려견과 산책을 즐겨보세요.</div></div>
            </div>
            <div className="divider w-full my-0"></div>
            <div className="grid grid-flow-col-dense grid-cols-4 h-20">
                <img className="mx-6 my-4 w-14 h-12 content-center" src="/assets/iconnext.png" alt=""></img>
                <div className="col-span-3 col-start-2 pl-0.5 p-4"><div className="line text-md font-bold text-left">감기약</div>
                <div className="line text-md text-left">19:00에 감기약 급여 알람이 있습니다.</div></div>
            </div>
            <div className="divider w-full my-0"></div>
            <div className="grid grid-flow-col-dense grid-cols-4 h-20">
                <img className="mx-6 my-4 w-14 h-12 content-center" src="/assets/iconnext.png" alt=""></img>
                <div className="col-span-3 col-start-2 pl-0.5 p-4"><div className="line text-md font-bold text-left">댓글 알림</div>
                <div className="line text-md text-left">내 게시글에 댓글이 달렸어요.</div></div>
            </div>
            <div className="divider w-full my-0"></div>
        </div>
    );
};

export default Alarmlist;