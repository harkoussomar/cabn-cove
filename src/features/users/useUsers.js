import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/apiUsers";

export function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["auth-users"],
    queryFn: fetchUsers,
  });

  return { users, isLoading };
}
