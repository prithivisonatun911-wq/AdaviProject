import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";
import Author from "dataMapping/author"
import JobTitle from "dataMapping/jobTitle"

function authorsTable_Data(authors) {
  return {
    columns: [
      { name: "author", align: "left" },
      { name: "right", align: "left" },
      { name: "function", align: "left" },
      { name: "status", align: "center" },
      { name: "employed", align: "center" },
      { name: "action", align: "center" },
    ],
    rows: authors.map((author) => {
      return {
        author: <Author image={author.image} name={author.name} email={author.email} />,
        right: (
          <ArgonBadge variant="gradient" badgeContent={author.right} color={author.right === "Admin" ? "success" : "secondary"} size="xs" container />
        ),
        function: <JobTitle job={author.job} org={author.org} />,
        status: (
          <ArgonBadge variant="gradient" badgeContent={author.status} color={author.status === "online" ? "success" : "secondary"} size="xs" container />
        ),
        employed: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">{author.employed}</ArgonTypography>
        ),
        action: (
          <ArgonTypography component="a" href="#" variant="caption" color="secondary" fontWeight="medium">Edit </ArgonTypography>
        ),
      };
    }),
  };
}

export default authorsTable_Data;