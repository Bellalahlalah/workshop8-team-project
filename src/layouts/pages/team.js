import { Card, Typography } from "@mui/material";
import MDBox from "components/MDBox";

function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "                                                67130892 Nunthawun Karnjanavarong",
      role: "Frontend Developer",
    },
    { id: 2, name: "ชื่อสมาชิกคนที่ 2", role: "Backend Developer" },
    { id: 3, name: "ชื่อสมาชิกคนที่ 3", role: "Designer" },
  ];

  return (
    <MDBox pt={6} pb={3}>
      <Card>
        <MDBox p={3}>
          <Typography variant="h4" gutterBottom>
            ทีมงานของเรา
          </Typography>
          <MDBox component="ul" p={0} m={0}>
            {teamMembers.map((member) => (
              <MDBox key={member.id} component="li" py={1} px={2}>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="caption">{member.role}</Typography>
              </MDBox>
            ))}
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default TeamPage;
