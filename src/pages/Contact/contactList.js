export const contactList = [
  {
    id: 0,
    name: '기관 혹은 기업',
    type: 'text',
    requir: true,
    placeHolder: '기관 이름을 입력해 주세요',
    category: 'company'
  },
  {
    id: 1,
    name: '담당자명 / 직책',
    type: 'text',
    requir: true,
    placeHolder: '김미니/마케팅 팀장',
    category:'name'
  },
  {
    id: 2,
    name: '이메일',
    type: 'text',
    requir: true,
    placeHolder: 'mini@gmail.com',
    category:'email'
  },
  {
    id: 3,
    name: '연락처',
    type: 'number',
    requir: true,
    placeHolder: '010-0000-0000',
    category:"call"
  },
  {
    id: 4,
    name: '기존 사이트 주소 (있는 경우만 입력)',
    type: 'text',
    requir: false,
    placeHolder: '사이트 주소를 입력해 주세요',
    category:'site'
  },
  {
    id: 5,
    name: '첨부파일',
    type: 'file',
    requir: false,
    placeHolder: '파일을 선택해 주세요',
    category:"attachment"
  },
  {
    id: 6,
    name: '문의사항',
    requir: true,
    placeHolder: '문의사항을 입력해 주세요',
    category:'message'
  },
];