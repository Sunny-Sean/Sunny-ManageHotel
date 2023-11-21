import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { createRoom } from "../../api/apiRooms";

function CreateRoomForm({ roomToEdit = {} }) {
  const { id: editId, ...editValue } = roomToEdit;
  const isEdit = Boolean(editId);

  // resgister: dùng để đăng ký thông tin các trường đầu vào để react hook form xử lý
  // getValues lấy giá trị từ tất cả trường trong form
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEdit ? editValue : {},
  });
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (newRoom) => createRoom(newRoom),
    // Làm mới dữ liệu sau khi tạo thành công
    onSuccess: () => {
      toast.success("New room successfully created");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      // Sau khi thêm thành công thì đưa form về trắng
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    // Khi gửi biểu mẫu thì gọi mutationFn để tạo phòng
    mutate({ ...data, image: data.image[0] });
  }

  function onError(err) {
    console.log(err);
  }

  return (
    // Khi Submit gửi dữ liệu ở các trường đã dki
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Room name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Price" error={errors?.price?.message}>
        <Input
          type="number"
          id="price"
          disabled={isCreating}
          {...register("price", {
            required: "This field is required",
            min: {
              value: 100,
              message: "The minimum price of the room is 100",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().price ||
              "Discount must less than price of the room",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for room"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isCreating}
          // defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Room photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type là một thuộc tính của HTML */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add Room</Button>
      </FormRow>
    </Form>
  );
}

export default CreateRoomForm;
