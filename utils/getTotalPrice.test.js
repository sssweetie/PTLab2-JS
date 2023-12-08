const getTotalPrice = require("./getTotalPrice");

describe("getTotalPrice function", () => {
  let mockModel;

  beforeEach(() => {
    mockModel = {
      findOne: jest.fn(),
      findOneAndUpdate: jest.fn(),
    };
  });

  test("should return correct total price when count is available", async () => {
    const mockProduct = {
      name: "diamond",
      count: 10,
      price: 1000,
    };
    mockModel.findOne.mockResolvedValue(mockProduct);
    mockModel.findOneAndUpdate.mockResolvedValue({ ...mockProduct, count: 8 });

    const totalPrice = await getTotalPrice("diamond", 2, mockModel);
    expect(totalPrice).toBe(2000);
  });

  test("should return 0 when count is not available", async () => {
    const mockProduct = {
      name: "diamond",
      count: 2,
      price: 1000,
    };
    mockModel.findOne.mockResolvedValue(mockProduct);

    const totalPrice = await getTotalPrice("diamond", 5, mockModel);
    expect(totalPrice).toBe(0);
  });
});
