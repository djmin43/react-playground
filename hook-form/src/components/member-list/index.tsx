import { Reservation } from "../../types";

type MemberListProps = {
  memberList: Reservation[];
};
export const MemberList = ({ memberList }: MemberListProps) => {
  return (
    <div>
      <h1>대기자 명단</h1>
      <table>
        <thead>
          <tr>
            <th>제출시간</th>
            <th>이름</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((member) => (
            <tr
              key={member.id}
              className={member.isResolved ? "strike" : ""}
              onClick={() => console.log(member.id)}
            >
              <td>{member.createdAt.toLocaleString()}</td>
              <td>{member.name}</td>
              <td>{member.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
