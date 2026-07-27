import { Button } from "@/components/ui/button";

interface CatalogPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: number | ((prev: number) => number)) => void;
}

export function CatalogPagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: CatalogPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-12 flex items-center justify-center gap-2"
      aria-label="Navegação da paginação"
    >
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage((prev) => Math.max(prev - 1, 1));
          window.scrollTo({ top: 300, behavior: "smooth" });
        }}
      >
        Anterior
      </Button>

      <span className="px-4 text-sm font-semibold text-muted">
        Página {currentPage} de {totalPages}
      </span>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => {
          setCurrentPage((prev) => Math.min(prev + 1, totalPages));
          window.scrollTo({ top: 300, behavior: "smooth" });
        }}
      >
        Próxima
      </Button>
    </nav>
  );
}
