import React from 'react';
import ListItem from 'components/List/ListItem';

const Alarmlist = () => {

    return (

        <ul>
            <h2 className="w-1/3 mx-auto py-4 mt-4 border-b border-gray-200 text-center text-2xl font-semibold">
                Alarms
            </h2>
            <ListItem
                title="심장사상충 약"
                content="급여일이 얼마 남지 않았어요 !"
            />
                <ListItem
                    title="산책량"
                    content="기록한 날이 꽤 지났네요. 기록을 활성화하고, 반려견과 산책을 즐겨보세요."
                />
                <ListItem
                    title="감기약"
                    content="19:00에 감기약 급여 알람이 있습니다."
                />
                <ListItem
                    title="댓글 알림"
                    content="내 게시글에 댓글이 달렸어요."
                />
        </ul>
    );
};

export default Alarmlist;