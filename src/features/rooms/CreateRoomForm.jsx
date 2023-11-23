import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateRoom } from "./useCreateRoom";
import { useUpdateRoom } from "./useUpdateRoom";

function CreateRoomForm({ roomToUpdate = {}, onCloseModal }) {
  const { createRoom, isCreating } = useCreateRoom();
  const { UpdateRoom, isUpdating } = useUpdateRoom();
  const isWorking = isCreating || isUpdating;

  const { id: updateId, ...updateValue } = roomToUpdate;
  const isUpdate = Boolean(updateId);

  // resgister: dùng để đăng ký thông tin các trường đầu vào để react hook form xử lý
  // getValues lấy giá trị từ tất cả trường trong form
  // handleSubmit: thực hiện submit mà không gây ra tải lại trang
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isUpdate ? updateValue : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    // Kiểm tra xem đường dẫn ảnh là chuỗi hay 0, nếu là chuỗi thì giữ nguyên và đưa giá trị vào update
    // Nếu 0 thì giá trị là đối tượng
    const image = typeof data.image === "string" ? data.image : data.image[0];
    // Khi gửi biểu mẫu thì gọi mutationFn để cập nhật phòng
    if (isUpdate)
      UpdateRoom(
        { newRoomData: { ...data, image }, id: updateId },
        {
          onSuccess: (data) => {
            // Sau khi thêm dữ liệu thì đưa form về trắng và thoát ra khỏi cửa số chỉnh sửa
            reset();
            onCloseModal?.();
          },
        }
      );
    // Khi gửi biểu mẫu thì gọi mutationFn để tạo phòng
    else
      createRoom(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            // Sau khi thêm dữ liệu thì đưa form về trắng và thoát ra khỏi cửa số chỉnh sửa
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(err) {
    console.log(err);
  }

  return (
    // Khi Submit gửi dữ liệu ở các trường đã dki
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Room name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
            // Không chỉnh sửa ảnh
            required: isUpdate ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type là một thuộc tính của HTML */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isUpdate ? "Update Room" : "Creat New Room"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateRoomForm;
