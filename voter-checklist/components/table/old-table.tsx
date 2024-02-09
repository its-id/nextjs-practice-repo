// 'use client';

// import React from 'react';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import { cn } from '@/lib/utils';
// import { Voter } from '@/types';

// export const VotersTable = React.memo(({ Voters }: { Voters: Voter[] }) => {
//   const [totalVoted, setTotalVoted] = React.useState(0);

//   return (
//     <Table>
//       <TableCaption>A list of your recent invoices.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead>S. No.</TableHead>
//           <TableHead>Membership No.</TableHead>
//           <TableHead>Tower No.</TableHead>
//           <TableHead>Flat No.</TableHead>
//           <TableHead>Member Name</TableHead>
//           <TableHead>Contact No.</TableHead>
//           <TableHead>Remarks</TableHead>
//           <TableHead>Status</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {Voters.map((voter) => (
//           <TableRow key={voter.id}>
//             <TableCell className='font-medium'>{voter.id}</TableCell>
//             <TableCell>{voter.membership_no}</TableCell>
//             <TableCell>{voter.tower_no}</TableCell>
//             <TableCell>{voter.flat_no}</TableCell>
//             <TableCell>{voter.member_name}</TableCell>
//             <TableCell>{voter.contact_no}</TableCell>
//             <TableCell>{voter.remarks}</TableCell>
//             <TableCell
//               className={cn({
//                 'text-red-500': voter.status === 'Not Voted',
//                 'text-green-500': voter.status === 'Voter',
//                 'text-muted-foreground': !voter.status,
//               })}
//             >
//               {voter.status || 'Not Voted'}
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={7}>Total Voted</TableCell>
//           <TableCell className='text-right'>{totalVoted}</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   );
// });
