export const ResponseBad = (res, message) => {
  res.status(400).json({
    message,
    data: [],
    code: 400,
  });
};

export const ResponseError = (res, message) => {
  res.status(500).json({
    message,
    data: [],
    code: 500,
  });
};

export const ResponseCreateStudent = (res, studentCreate) => {
  res.status(201).json({
    message: "Student created successfully",
    data: [
      {
        id: studentCreate.id,
        created_at: studentCreate.createdAt,
      },
    ],
    code: 201,
  });
};

export const ResponseGetUsers = (res, users) => {
  res.status(200).json({
    message: "Users found",
    data: users,
    code: 200,
  });
};

export const ResponseCreateAdmin = (res, adminCreate) => {
  res.status(201).json({
    message: "Admin created successfully",
    data: [
      {
        id: adminCreate.id,
        created_at: adminCreate.createdAt,
      },
    ],
    code: 201,
  });
};

export const ResponseCreateSecretary = (res, secretaryCreate) => {
  res.status(201).json({
    message: "Secretary created successfully",
    data: [
      {
        id: secretaryCreate.id,
        created_at: secretaryCreate.createdAt,
      },
    ],
    code: 201,
  });
};

export const ResponseCreateTeacher = (res, teacherCreate) => {
  res.status(201).json({
    message: "Teacher created successfully",
    data: [
      {
        id: teacherCreate.id,
        created_at: teacherCreate.createdAt,
      },
    ],
    code: 201,
  });
};

export const ResponseCreateMatter = (res, matterCreate) => {
  res.status(201).json({
    message: "Matter created successfully",
    data: [
      {
        id: matterCreate.id,
        created_at: matterCreate.createdAt,
      },
    ],
    code: 201,
  });
};

export const ResponseAssignMatter = (res, assign) => {
  res.status(200).json({
    message: "Matter assigned successfully",
    data: assign,
    code: 200,
  });
};
