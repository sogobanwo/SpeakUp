import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">View Comments</h1>
      <Card className="bg-[#F3F3F3] p-8 my-3 text-">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
        dapibus elementum. In condimentum laoreet elit vitae maximus.
      </Card>

      <Pagination className="flex justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Comments;
