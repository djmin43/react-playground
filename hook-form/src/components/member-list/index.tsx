import { Member } from "../../App.tsx";

type MemberListProps = {
  memberList: Member[];
};
export const MemberList = ({ memberList }: MemberListProps) => {
  return (
    <div>
      <h1>대기자 명단</h1>
      <div>
        {memberList.map((member, index) => (
          <div key={index}>
            <span>{member.name}</span>
            <span>{member.phoneNumber}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
