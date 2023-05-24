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
